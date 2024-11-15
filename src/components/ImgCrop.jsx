import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Cropper, RectangleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ImgCrop(props) {
  const [open, setOpen] = useState(false);
  const [temporalImgUrl, setTempoImgUrl] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [cropperRef, setCropperRef] = useState(null);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setTempoImgUrl(fileUrl);
      props.setImgUrl(fileUrl); // Set the default image
      setOpen(true);
    }
  };

  const onChange = (cropper) => {
    setCoordinates(cropper.getCoordinates());
    setCropperRef(cropper); // Store reference to cropper
  };

  const handleConfirm = () => {
    if (cropperRef?.getCanvas()) {
      // Get the cropped image
      props.setImgUrl(cropperRef.getCanvas().toDataURL());
    } else {
      // If no crop was made, fallback to the original image
      props.setImgUrl(temporalImgUrl);
    }
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <label htmlFor="image-upload" className="cursor-pointer">
        <Button>Choisir une image</Button>
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Recadrer l'image</DialogHeader>
        <DialogBody>
          {temporalImgUrl && (
            <div className="h-92">
              <Cropper
                src={temporalImgUrl}
                onChange={onChange}
                className={"cropper"}
                style={{
                  maxHeight: 400,
                }}
                stencilComponent={RectangleStencil}
                stencilProps={{
                  aspectRatio: 4 / 4,
                  movable: true,
                  resizable: true,
                }}
              />
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Annuler</span>
          </Button>
          <Button variant="gradient" color="amber" onClick={handleConfirm}>
            <span>Confirmer</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
