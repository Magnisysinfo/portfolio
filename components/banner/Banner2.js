import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Your Business Deserves Better Solution test.
            </h1>
            <h4 className="subtitle font-light">
              Your business software represents your standard
              <br /> Better software expresses the quality of your work.
            </h4>
            {/* <a
              href=""
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
             Free Consult
            </a> */}
            <Link href="/#coming">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Free Consult
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
