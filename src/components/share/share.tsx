import React, { useRef, useState } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

//POST to /new
const postMethod = (data, formRef) => {
  console.log("Executed");
  console.log(data);
  let form = formRef.current;
  const formData = new FormData(form);
  data = data.target;
  console.log(formRef.current.imageUrl.files[0]);
  console.log(formData);

  axios({
    method: "post",
    url: "https://ongaku.onrender.com/ongaku/share/new",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

//GET Spotify Data
const getSpotifyData = (e, formRef, setSelectedImg) => {
  let i;
  e && (i = e.value.match(/([^/]+)\/?$/));
  console.log(i);
  try {
    axios
      .get(`https://ongaku.onrender.com/ongaku/share/${i[1]}`)
      .then((res) => {
        formRef.current.id.value = res.data.id;
        formRef.current.name.value = res.data.name;
        formRef.current.desc.value = res.data.description;
        formRef.current.defaultUrl.value = res.data.images[0].url;
        formRef.current.imageUrl.value === "" &&
          setSelectedImg(res.data.images[0].url);
      });
  } catch (error) {
    console.error();
  }
};

export const ShareContainer = () => {
  let formRef = useRef(null);
  let [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="flex relative m-5">
        <AiFillCloseCircle
          className="absolute top-0 end-0"
          onClick={() => {
            console.log((document.getElementsByTagName("img")[1].src = ""));
          }}
        />
        <div className=" flex-col justify-center box-border  rounded-lg bg-stone-900 shadow-lg">
          <div className="m-3">
            <img
              className=" box-border rounded-lg w-full m-auto"
              src={selectedImg}
              alt="uploadImg"
            />
          </div>
          <p className="text-white text-center">
            {formRef.current ? formRef.current.name.value : ""}
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postMethod(e, formRef);
          }}
          ref={formRef}
        >
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="text"
            name="url"
            onChange={(e) => {
              getSpotifyData(e.target, formRef, setSelectedImg);
            }}
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="text"
            name="id"
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="text"
            name="name"
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="text"
            name="desc"
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="file"
            alt="uploadImg"
            name="imageUrl"
            onInputCapture={(e) => {
              console.log(e.target.files[0]);
              let imageUrl = URL.createObjectURL(e.target.files[0]);
              setSelectedImg(imageUrl);
            }}
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="text"
            name="defaultUrl"
            onChangeCapture={(e) => {
              console.log(formRef.current.imageUrl);
              formRef.current.imageUrl.value === "" &&
                setSelectedImg(e.target.value);
            }}
          ></input>
          <input
            className=" bg-white border-l-pink-50 m-3"
            type="submit"
            name="submit"
          ></input>
        </form>
      </div>
    </>
  );
};
