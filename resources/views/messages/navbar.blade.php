<ul class="nav nav-pills"  style='border-bottom:1px #CCCCCC solid;'>
    <li id="chat-li">
        <a class="nav-class" href="/chats">
            Chat
            <span id="message-badge" class="badge badge-danger" style="width:25px !important; line-height:15px; text-align:center !important; margin-left:15px; margin-top:10px; float:right; border-radius:25px !important;"></span>
        </a>
    </li>
    <li id="email-li">
    	<a class="nav-class" href="/emails">
    	    Email<span id="email-badge" class="badge badge-danger" style="width:25px !important; line-height:15px; text-align:center !important; margin-left:15px; margin-top:10px; float:right; border-radius:25px !important;"></span>
    	</a>
    </li>
    <li id="forum-li">
    	<a class="nav-class" href="/forums">Forums and Announcement</a>
    </li>
</ul>
<input type="hidden" name="type" id="type" value="{{$type ?? ''}}">