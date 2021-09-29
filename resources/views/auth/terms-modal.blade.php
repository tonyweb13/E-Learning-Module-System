<div id="terms-modal" class="modal fade" role="dialog">
  @csrf
    <div class="modal-dialog" style=" max-width: 40% !important;">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header"  style="background-color: #142d57; color: white;height:50px !important;">
                <h5><center>Terms and Conditions</center></h5>
                <button type="button" class="close" data-dismiss="modal" style="color:white;">
                    &times;</button>
            </div>
            <form id="add-topic" class=" form-control"> 
              @csrf 
              <div class="modal-body form-control">
                <div class="col-md-12">
                    <p>
                        Welcome to our website. If you continue to browse and use this website, you are agreeing to 
                        comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern 
                        Abiva Publishing House Inc.’s relationship with you in relation to this website. If you disagree with any part of these terms 
                        and conditions, please do not use our website.
                    </p>
                    <p>
                        The term Abiva Publishing House or 'us' or 'we' refers to the owner of the website whose registered office is Abiva Bldg., 851 G. 
                        Araneta Avenue, 1113, Quezon City, Philippines. The term 'you' refers to the user or viewer of our website.
                    </p>
                    <p>The use of this website is subject to the following terms of use:</p>
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness
                        or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that 
                        such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or 
                        errors to the fullest extent permitted by law.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. 
                        It shall be your own responsibility to ensure that any products, services or information available through this website meet 
                        your specific requirements.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        This website contains material which is owned by or licensed to us. 
                        This material includes, but is not limited to, the copy, design, layout, look, appearance, and graphics. 
                        Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.
                        They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                    </p>
                    
                    <p>
                        <i class="fas fa-circle fa-xs"></i>
                        Your use of this website and any dispute arising out of such use of the website is subject to the laws of the Republic of the Philippines.
                    </p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                      Close
                </button>
              </div>
            </form>
        </div>
    </div>
</div>