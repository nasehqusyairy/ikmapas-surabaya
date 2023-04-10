import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import MainNavbar from "@/components/navbars/mainNavbar";
import Link from "next/link";
import img from '../../images/about.jpg';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";

function newsDetail() {
  const router: NextRouter = useRouter();
  const { slug }: ParsedUrlQuery = router.query;

  return (
    <main>
      <MainNavbar>
        <Link className="btn btn-primary" href='/news'>Kembali</Link>
      </MainNavbar>
      <section>
        <div className="container-fluid bg-primary">
          <div className="row">
            <div className="col text-center">
              <Image className="img-fluid" style={{ maxHeight: '75vh' }} alt="" src={img} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center fw-bold text-primary">Lorem Ipsum Dolor Sit Amet</h1>
              <h3>Slug : {slug}</h3>
              <div style={{ textAlign: 'justify' }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsu.ius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedi.ta corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}


export default newsDetail;
