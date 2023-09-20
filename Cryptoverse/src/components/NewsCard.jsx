import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
const NewsCard = ({onenews}) => {
    
  return (
    <div className=' w-full '>
 
 

    <Card className="w-full md:flex-row   mb-7">
      <CardHeader
        shadow={false}
        floated={true}
        className="m-0 md:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={onenews.image}
          alt="card-image"
          className="h-full w-full object-cover -z-20"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6"  className="mb-4 ">
          {onenews.source}
        </Typography>
        <Typography variant="h4"  className="mb-2">
          {onenews.title}
        </Typography>
        <Typography  className="mb-8 font-normal">
         {onenews.description}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2 text-xl">
            {onenews.date}
           
          </Button>
        </a>
      </CardBody>
    </Card>


    </div>
  )
}

export default NewsCard
