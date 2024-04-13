// import {FmBucket} from './resources/bucket'
import {FmFrontend} from "./services/frontend"

function main(){ 
  new FmFrontend({
    Name: 'example',
    Product: 'devops-course'
  })
}

main();

// const bucketList: string[] = [
//   "example-1",
//   "example-2"
// ];

// for (const bucket in bucketList) {
//   new FmBucket({
//     Name: bucket,
//     Product: 'devops-course'
//   })
// }