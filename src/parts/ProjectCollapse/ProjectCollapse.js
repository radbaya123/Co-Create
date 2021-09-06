import React from "react";
import { Form, Button, Collapse, Row, Col } from "antd";
import { Avatar } from "antd";
import { SearchOutlined, PlusCircleOutlined, AntDesignOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import { AntDesignOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Panel } = Collapse;
/* eslint-disable no-template-curly-in-string */
const text = `
  Proyek ini merupakan bentuk kerjasama antara pemerintah dan masyarakat yang bertujuan untuk meningkatkan kualitas pendidikan di Indonesia. Memberikan kesempatan bagi anak-anak putus sekolah dari keluarga kurang mampu untuk bisa melanjutkan pendidikan, tahun ini Mobil Kelas Berjalan (MKB) Kak Seto kembali membuka pendaftaran tahun ajaran 2020/2021. MKB Kak Seto merupakan lembaga pendidikan di bawah yayasan yang didirikan oleh psikolog anak Seto Mulyadi. Selama proses belajar, selain bebas biaya pendidikan, siswa juga difasilitasi sarana dan prasarana yang didukung penuh oleh Homeschooling Kak Seto. Orangtua siswa hanya perlu mengeluarkan biaya transportasi dari dan menuju ke sekolah.
`;
const text2 = `
  Proyek ini merupakan bentuk kerjasama antara pemerintah dan masyarakat yang bertujuan untuk ....
`;

function ProjectCollapse() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Button>Article</Button>
          <Button type="primary">Project</Button>
        </Col>
        {/* <span /> */}
        <Col span={8} offset={8}>
          <Button type="primary" shape="round" icon={<PlusCircleOutlined />} style={{margin: 10}}>
            New Project
          </Button>
          <Button shape="round" icon={<SearchOutlined />}>
            Search
          </Button>
        </Col>
      </Row>
      <br></br>

      <Form {...layout}>
        <Collapse accordion>
          <Panel
            header="Bangun Sekolah Gratis"
            key="1"
            className=""
            style={{
              marginBottom: 10,
            }}
          >
            <p>
              <b>Sosial Kemanusiaan</b>
            </p>
            <p>12 September 2021</p>
            <p></p>
            <hr />
            <p> 
              <b>Deskripsi</b> <br />
              {text}
            </p>
            <br />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            ></Avatar>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar
              style={{
                backgroundColor: "#1890ff",
              }}
              icon={<AntDesignOutlined />}
            />
            <Button type="primary" shape="round" icon={<PlusCircleOutlined />} style={{margin: 10}}>
              Collaborator
            </Button>
            <Button type="disabled" shape="round" icon={<CloseCircleOutlined />}>
            	Delete Project
            </Button>
          </Panel>
        </Collapse>

        <Collapse accordion>
          <Panel
            header="Bangun Masjid Gratis"
            key="1"
            className=""
            style={{
              marginBottom: 10,
            }}
          >
            <p>
              <b>Sosial Kemanusiaan</b>
            </p>
            <p>12 September 2021</p>
            <p></p>
            <hr />
            <p>
              <b>Deskripsi</b> <br />
              {text2}
            </p>
            <br />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            ></Avatar>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar
              style={{
                backgroundColor: "#1890ff",
              }}
              icon={<AntDesignOutlined />}
            />
            <Button type="primary" shape="round" icon={<PlusCircleOutlined />} style={{margin: 10}}>
              Collaborator
            </Button>
            <Button type="disabled" shape="round" icon={<CloseCircleOutlined />}>
              Delete Project
            </Button>	
          </Panel>
        </Collapse>
      </Form>
    </div>
  );
}

export default ProjectCollapse;
