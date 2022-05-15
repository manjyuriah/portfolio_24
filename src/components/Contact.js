import './Contact.scss';

function Contact() {
  return (
      <>
      <div className="contact-container">
        <div className="contact-box">
        <div className="title">Contact Me</div>
          <div>juju970128@naver.com</div>
          <form id="contact_frm" name="contact_frm" method="POST" encType="application/x-www-form-urlencoded" action="mailto.php">
                <input type="hidden" name="myemail" value="juju970128@naver.com" />
                <ul>
                    <li><input type="text" placeholder="이름" name="pernm" autoFocus id="pernm" /></li>
                    <li><input type="text" placeholder="연락처" name="pertel" id="pertel" /></li>
                    <li><input type="text" placeholder="이메일" name="peremail" id="peremail" /></li>
                    <li><textarea placeholder="문의 내용" name="pertext" id="pertext" /></li>
                </ul>
                <input type="button" value="문의 하기" id="p_btn" />
            </form>
        </div>
      </div>
      </>
      
  );
}

export default Contact;
