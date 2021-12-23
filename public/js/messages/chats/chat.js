$(function() {

    var id = null;

    var send_to = null;

    var compose_new = false;

    var conversation = null;



    $('body').css('overflow', 'hidden');



    $('#compose_btn').click(function() {

        compose_new = true;

        $('#title').html('Compose new message');

        $('#compose').show();

        $('#chats').hide();

    });



    $('#search_user').autocomplete({

        minLength:0,

        source: function (request, response) {

            $.get(`/search/users?keyword=${$('#search_user').val()}`, function(data) {

                 response($.map(data, function (item) {

                    return {

                        value: item.name,

                        id: item.id,

                    }

                }));

            })

        },

        select: function(event, res) {

            send_to = res.item.id;

        },

        change: function() {

            if (!/\S/.test($('#search_user').val()) || send_to == null) {

                $('#search_user').val('');

                send_to = null;

            }

        }

    })

    .focus(function(){

        $(this).data("uiAutocomplete").search($(this).val());

    });



    $('#message_form').submit(function(e) {

        e.preventDefault();

        if (/\S/.test($('#message_text').val())) {

            if (compose_new) {

                if (send_to == null) {

                    showErrorAlert('Warning', 'Please select a recipient');

                    return;

                }

                let data = {

                    _token: _token,

                    send_to: send_to,

                    message: $('#message_text').val()

                };

                showLoader('Sending', 'Please wait...');

                ajaxCall('/chats', data, 'POST')

                .done((res) => {

                    Swal.close();

                    compose_new = false;

                    send_to = null;

                    $('#search_user').val('');

                    $('#title').html('Select Conversation');

                    $('#compose').hide();

                    $('#chats').show();

                    $('#message_form')[0].reset();

                    sendSocketEvent('new-chat', res, res.receivers);

                })

                .fail((err) => {

                    showHttpErrorAlert(err);

                })

            } else {

                let data = {

                    _token: _token,

                    cid: id,

                    message: $('#message_text').val()

                };

                showLoader('Loading','Please wait....');

                ajaxCall('/message/chat', data, 'POST')

                .done((res) => {

                    $('#message_form')[0].reset();

                    sendSocketEvent('chat-message', res, getReceivers());
                    Swal.close();

                })

                .fail((err) => {

                    showHttpErrorAlert(err);

                })

            }

        }

    });



    $(document).on('click', '.view-conversation', function() {

        id = $(this).attr('value');

        $(this).removeClass('unread');

        $('.view-conversation').removeClass('actives');

        $(this).addClass('actives');

        $.get(`/chats/${id}`, function(res) {

            conversation = res;

            $('#title').html(res.title);

            $('#compose').hide();

            $('#chats').show();

            $('#chats').empty();

            for (const m of res.messages) {

                chatBubbles(m);

            }

        })

        .fail((err) => {

            showHttpErrorAlert(err);

        })

    });



    function getReceivers() {

        let receivers = [];

        for (const member of conversation.members) {

            receivers.push(member.user_id.id);

        }



        return receivers;

    }



    function chatBubbles(m) {

        let bubble = ``;

        if (m.created_by.id == uid) {

            bubble = `<div class="sent p-2">${m.message}<br><span class="small">${m.formatted_date}</span></div>`;

        } else {

            bubble = `<div class="receive p-2">${m.message}<br><span class="small">${m.formatted_date}</span></div>`;

        }



        $('#chats').append(bubble);

        $('#chats').scrollTop($('#chats')[0].scrollHeight);

    }



    socket.on('chat-message', res => {

        if (id == res.conversation_id) {

            chatBubbles(res);

        } else {

            if (res.created_by.id !== uid) {

                $(`#conversation-${res.conversation_id}`).addClass('unread');

                showLoader('Loading','Please wait....');
                //notif

                $.ajax({

                    type: "GET",

                    url: "/getnotifications/chat",

                    data: null,

                    dataType: 'JSON',

                    success: function (res) {

                    //console.log(res);

                        if(res == 0){



                            $('#message-badge').hide;

                        }else{



                            $('#message-badge').show;

                            $('#message-badge').text(res);

                        }

                        Swal.close();

                    },

                    error: function(error) {

                        showHttpErrorAlert(error);

                    }

                });

                $.ajax({

                    type: "GET",

                    url: "/getnotifications/emailchat",

                    data: null,

                    dataType: 'JSON',

                    success: function (res) {

                    //console.log(res);

                        if(res == 0){



                            $('#email-badge-insti').hide;

                            $('#email-badge-teacher').hide;

                            $('#email-badge-student').hide;

                        }else{



                            $('#email-badge-insti').show;

                            $('#email-badge-teacher').show;

                            $('#email-badge-student').show;



                            $('#email-badge-insti').text(res);

                            $('#email-badge-teacher').text(res);

                            $('#email-badge-student').text(res);

                        }

                        Swal.close();

                    },

                    error: function(error) {

                        showHttpErrorAlert(error);

                    }

                });





            }

        }

        $(`#conversation-${res.conversation_id}`).prependTo('#messages');

        $(`#conversation-${res.conversation_id}`).find('.date').html(res.formatted_date);

        $(`#conversation-${res.conversation_id}`).find('.message').html(res.message);

    });



    socket.on('new-chat', res => {

        let title = '';

        if (uid == res.sender.id) {

            title = res.receiver.name;

        } else {

            title = res.sender.name;

        }

        $('#messages').prepend(`

            <div class="p-2 border-bottom div-hover view-conversation unread" id="conversation-${res.id}" value="${res.id}">

                <span class="date small float-right">${res.date}</span>

                <span>${title}</span>

                <br>

                <span class="message small">${res.last_message}</span>

            </div>

        `)

    });

});
