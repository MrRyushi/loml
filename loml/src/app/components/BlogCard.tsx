'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
export function BlogCard(props) {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={props.image}
          alt="first date"
          className="w-full h-96 object-cover" // fixed height and object-cover
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {props.title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">{props.date}</Typography>
        <a href={props.link} className="bg-gray-palette text-white-palette hover:bg-gray-700 py-4 px-8 rounded-xl">Open</a>
      </CardFooter>
    </Card>
  );
}
