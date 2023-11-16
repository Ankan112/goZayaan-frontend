import React, { useState } from "react";
import { Button, Drawer, Checkbox, Slider, Radio } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const FilterDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [value, setValue] = useState(1);
  const onChanged = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Button type="primary" size="large" onClick={showDrawer}>
        Filter
        <FilterOutlined />
      </Button>
      <Drawer title="Filter" placement="right" onClose={onClose} open={open}>
        <div>
          <h3>Category</h3>
          <div className="mt-3">
            <Checkbox onChange={onChange}>Science (A Unit)</Checkbox>
          </div>
          <div className="mt-2">
            <Checkbox onChange={onChange}>Humanities (B Unit)</Checkbox>
          </div>
          <div className="mt-2">
            <Checkbox onChange={onChange}>Business Studies (C Unit)</Checkbox>
          </div>
        </div>
        <div>
          <h3 className="mt-3">Price Range</h3>
          <Slider
            min={500}
            max={10000}
            range={{
              draggableTrack: true,
            }}
            defaultValue={[1500, 5000]}
          />
        </div>
        <div>
          <h3 className="mt-3">Ratings</h3>
          <div className="mt-3">
            <Checkbox onChange={onChange}>5</Checkbox>
          </div>
          <div className="mt-2">
            <Checkbox onChange={onChange}>4 +</Checkbox>
          </div>
          <div className="mt-2">
            <Checkbox onChange={onChange}>3 + </Checkbox>
          </div>
        </div>
        <div>
          <h3 className="my-3">Course Type</h3>
          <Radio.Group onChange={onChanged} value={value}>
            <Radio value={"freeCourse"}>Free Course</Radio>
            <Radio value={"paidCourse"}>Paid Course</Radio>
          </Radio.Group>
        </div>
        <button
          onClick={onClose}
          className="py-2 px-4 text-white bg-blue-500 rounded border-none mt-5 cursor-pointer hover:bg-blue-400 "
        >
          Apply Filter
        </button>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
