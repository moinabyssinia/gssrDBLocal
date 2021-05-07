'''  
this script gets the name, lon, lat, country of a given tide gauge
using the geopy package to get the country name of each tide gauge
'''

import os
import pandas as pd
import urllib.request as urllib2
from urllib.request import urlopen
import json
import reverse_geocode
from geopy.geocoders import Nominatim

# initialize Nominatim API 
geolocator = Nominatim(user_agent="geoapiExercises")

dir_home = "C:\\Users\\mi292519\\OneDrive\\gssrDB\\rawData\\06_dmax_surge_georef"

os.chdir(dir_home)
tgList = os.listdir()

dmaxDat = pd.DataFrame(columns = ['name', 'lon', 'lat', 'country'])


# loop through tgs
for ii in range(795, len(tgList)):

    os.chdir(dir_home)


    print(tgList[ii])

    dat = pd.read_csv(tgList[ii])

    #get parameters 
    name = tgList[ii].split('.csv')[0]
    lon = dat['lon'][0]
    lat = dat['lat'][0]

    # print(lat+","+lon)

    #get country name
    
    # initialize Nominatim API 
    geolocator = Nominatim(user_agent="geoapiExercises")

        
    # Latitude & Longitude input
    Latitude = str(lat)
    Longitude = str(lon)
    
    location = geolocator.reverse(Latitude+","+Longitude, language="en")
    
    print(location == None)

    # print(hasattr(location.raw, 'address'))

    if (location != None):
        address = location.raw['address']
        country = address.get('country')
    else: 
        country = "NaN"
    
    # Display
    # print(country)

    # country = 
    # print(country)

    #assign parameters
    dmaxDat = dmaxDat.append({
        'name': name, 'lon': lon, 'lat': lat, 'country': country
        }, ignore_index=True)

    print(dmaxDat)




    #save data
    os.chdir("C:\\Users\\mi292519\\OneDrive\\gssrDB\\rawData")
    dmaxDat.to_csv("allTgsData.csv")