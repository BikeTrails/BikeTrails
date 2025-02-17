import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';


type AppProps = {
  trail: trail,
  index: number
}; /* use `interface` if exporting so that consumers can extend */

interface trail {
  name: string;
  length: number;
  difficulty: string,
  description: string
}

// Easiest way to declare a Function Component; return type is inferred.
const TrailInfoCard = ({ trail, index }: AppProps,) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345, minWidth: 345, boxShadow: 3 }} className="trail-info-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="200"
          src={`src/assets/mtn-biking-${index}.jpeg`}
        />
        <CardContent sx={{ minHeight: 200 }}>
          <Typography gutterBottom variant="h6" noWrap component="div">
            {trail.name}
          </Typography>
          <Typography variant="subtitle2">
                <span>{trail.length > 1 ? `${Math.trunc(trail.length)} miles` : `${Math.trunc(trail.length)} mile`}</span>
                {
                  trail.difficulty ? <span>  • {trail.difficulty}</span> : undefined
                }
          </Typography>
          <Typography variant="body2" color="text.secondary" className="trail-description">
            {trail.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TrailInfoCard;


//export default function TrailInfoCard({trail, index}) {

    // return (
    //   <Card sx={{ maxWidth: 345, maxHeight: 345, minWidth: 345, boxShadow: 3 }} className="trail-info-card">
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="200"
    //         width="200"
    //         src={`src/assets/mtn-biking-${index}.jpeg`}
    //       />
    //       <CardContent sx={{ minHeight: 200 }}>
    //         <Typography gutterBottom variant="h6" noWrap component="div">
    //           {trail.name}
    //         </Typography>
    //         <Typography variant="subtitle2">
    //               <span>{trail.length > 1 ? `${Math.trunc(trail.length)} miles` : `${Math.trunc(trail.length)} mile`}</span>
    //               {
    //                 trail.difficulty ? <span>  • {trail.difficulty}</span> : undefined
    //               }
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary" className="trail-description">
    //           {trail.description}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    // );
//}


//original code
// export default function TrailInfoCard({trail, index}) {


//   return (
//     <Card sx={{ maxWidth: 345, maxHeight: 345, minWidth: 345, boxShadow: 3 }} className="trail-info-card">
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           width="200"
//           src={`src/assets/mtn-biking-${index}.jpeg`}
//         />
//         <CardContent sx={{ minHeight: 200 }}>
//           <Typography gutterBottom variant="h6" noWrap component="div">
//             {trail.name}
//           </Typography>
//           <Typography variant="subtitle2">
//                 <span>{trail.length > 1 ? `${Math.trunc(trail.length)} miles` : `${Math.trunc(trail.length)} mile`}</span>
//                 {
//                   trail.difficulty ? <span>  • {trail.difficulty}</span> : undefined
//                 }
//           </Typography>
//           <Typography variant="body2" color="text.secondary" className="trail-description">
//             {trail.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
