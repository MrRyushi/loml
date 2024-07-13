'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import emailjs from '@emailjs/browser';
import { MouseEvent } from "react";

interface BackgroundBlogCardProps {
  image: string;
  title: string;
}


export function BackgroundBlogCard({ image, title }: BackgroundBlogCardProps) {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('in')
    const templateParams = {
      date_name: title,
    };
    emailjs
      .send('service_z41kpc4', 'template_edf5dbn', templateParams, 'rbZKWMCHKJJaECXYD')
      .then(
        () => {
          console.log('email sent')
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onClick={(e) => sendEmail(e)}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody
        className="relative py-14 px-6 md:px-12"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}
