import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography, TextField } from '@mui/material';
import {useParams } from 'react-router-dom';


const Shows = ()=>{
    const [shows, setShows] = useState([]);
    const input = useParams();

    useEffect(() => {
      fetch(`https://api.tvmaze.com/search/shows?q=${input.query}`)
        .then((response) => response.json())
        .then((data) => {
          setShows(data);
        });
    }, []);

    return (
        <div>
            <Grid container spacing={1}>
                {shows.map((show)=>(
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={show.show.image.original}
                                    alt="Nothing to show"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Movies
                                    </Typography>
                                    <Typography>{show.show.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>                    
                ))}
            </Grid>
        </div>
    )
}

export default Shows;