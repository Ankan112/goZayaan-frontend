import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "How do I enroll in an online course?",
    children: (
      <p>
        Enrollment is typically done through our website. Find the course
        you&#39;re interested in, click on the Enroll button, and follow the
        provided instructions. Payments, if applicable, can usually be made
        securely online.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What if I face technical issues during the course?",
    children: (
      <p>
        If you encounter technical problems, our support team is ready to assist
        you. You can usually find technical support contact information on the
        course platform. Common issues, such as video playback or login
        troubles, often have step-by-step troubleshooting guides available.
      </p>
    ),

    style: panelStyle,
  },
  {
    key: "3",
    label: "Can I get a refund if I need to drop or withdraw from the course?",
    children: (
      <p>
        Refund policies vary, and details can be found in the terms and
        conditions during the enrollment process. Some courses may have a refund
        period, while others may offer partial or no refunds. Be sure to review
        the refund policy before enrolling.
      </p>
    ),
    style: panelStyle,
  },
];

const FAQ = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
};

export default FAQ;
