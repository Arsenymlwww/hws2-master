import React from "react";
import downIcon from "../../../../assets/icons/Polygon 2.svg";
import upIcon from "../../../../assets/icons/Polygon 5.svg";
import noneIcon from "../../../../assets/icons/Polygon 7.svg";

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === "") return down;
  if (sort === down) return up;
  if (sort === up) return "";
  return down; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}
      <img
        id={id + "-icon-" + sort}
        src={icon}
        alt={`Sort by ${value}`}
        style={{ width: "10px", height: "10px" }}
      />

      {/* {icon}  */}
      {/*а это убрать*/}
    </span>
  );
};

export default SuperSort;
