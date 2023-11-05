import React from "react";
import { DirectionsStyle } from "./index";
import Image from "next/image";
//@ts-ignore
import GoogleMapReact from "google-map-react";
import Button from "@/components/Button/Button";

const Directions = () => {
  return (
    <DirectionsStyle>
      <div className='max-width'>
        <h2>How to get to us?</h2>

        <div className='directions-image'>
          <div className='directions'>
            <div className='address'>
              <h3>Address</h3>
              <p>
                Musée du Louvre, Rue de Rivoli, 75001 Paris, France. Hall
                Napoléon, under the Pyramid
              </p>
            </div>
            <div className='metro'>
              <h3>Metro station</h3>
              <p>
                Palais-Royal Musée du Louvre (lines 1 and 7) and Pyramides (line
                14)
              </p>
            </div>
          </div>
          <div className='image'>
            <Image
              src='/assets/images/louvre.jpg'
              alt=''
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className='map' style={{ height: "545px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDuZfzcy-DyrGxOebjZKMyaFKsEZ3i6be8",
            }}
            defaultCenter={{ lat: 48.860395, lng: 2.338543 }}
            defaultZoom={16}
          ></GoogleMapReact>
          <div className='vehicles'>
            <div className='bus'>
              <span className='accent'>Bus:</span>
              <br />
              <p>no. 21, 24, 27, 39, 48, 68, 69, 72, 81, 95</p>
            </div>
            <div className='bike'>
              <span className='accent'>Vélib’ bike-rental stations:</span>
              <br />
              <p>
                No. 1015: 2 Place André Malraux <br />
                No. 1023: 165 Rue Saint-Honoré <br />
                No. 1014: 5 Rue de l’Echelle <br />
                No. 1013: 186 Rue Saint-Honoré
              </p>
            </div>
            <div className='car'>
              <span className='accent'>Car:</span>
              <br />
              <p>
                Underground parking is available on Avenue du Général Lemonier.
                It is open daily from 7 a.m. to 11 p.m
              </p>
            </div>
          </div>
        </div>

        <footer className='footer'>
          <div className='quick-entry'>
            <span>Quick entry to the museum in less than 30 minutes!</span>
            <Button text='BUY YOUR TICKET' />
          </div>

          <div className='info'>
            <h3 className='serif'>Louvre</h3>
            <p>Hall Napoléon, under the Pyramid</p>
            <p>Every day from 9 a.m. to 6 p.m., except Tuesday.</p>
            <p>on Wednesdays and Fridays to 9:45 p.m.</p>
            <b className='accent'>Further information</b>
            <p>+33 (0)1 40 20 53 17</p>
          </div>
        </footer>
      </div>
    </DirectionsStyle>
  );
};

export default Directions;
