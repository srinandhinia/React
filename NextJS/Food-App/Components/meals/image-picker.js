"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ labelName, name }) {
  const pickImageButton = useRef();

  const [pickedImage, setPickedImage] = useState();

  function handleClickPick() {
    pickImageButton.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{labelName}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p className="">Image not picked yet.</p>}
          {pickedImage && (
            <Image fill src={pickedImage} alt="Image selected by user." />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={pickImageButton}
          onChange={handleImageChange}
          required
        />
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handleClickPick}
      >
        Pick Image
      </button>
    </div>
  );
}
