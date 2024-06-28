'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}
 
export function BlogCard({ image, title, description, date, link }:BlogCardProps ) {
  return (
    <Card className="max-w-[24rem] overflow-hidden" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <img
          src={image}
          alt="first date"
          className="w-full h-96 object-cover" // fixed height and object-cover
        />
      </CardHeader>
      <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h4" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{date}</Typography>
        <a href={link} className="bg-gray-palette text-white-palette hover:bg-gray-700 py-4 px-8 rounded-xl">Open</a>
      </CardFooter>
    </Card>
  );
}
