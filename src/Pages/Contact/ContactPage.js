import { Row,Col } from "antd";
import ContactSection from "./ContactCom";
import "./ContactStyle.css";
import contact from "../../assets/icons/contact.svg"

function ContactPage() 
{
    return (
        <>
        <Row className="ContactBox" justify={"space-between"}>

        <Col style={{width:"40%"}}>
        <input className="TextField" placeholder="Enter Name" type="text" />
          <br />
          <br />
          <input className="TextField" placeholder="Enter Email" type="email" />
          <br />
          <br />
          <textarea
            className="TextField message"
            placeholder="Enter Email"
            type="email"
          />
          <br />
          <br />
          <button className="btn"> Send Now 📁</button>
          <br />
          <br />
          <br />
          <br />
        </Col>
        <Col style={{width:"47%"}}>
            <img src={contact} width={400} />
        </Col>

        </Row>
        </>
    )
}

export default ContactPage;