const year = 2020;
const champion = 2020;

switch(year, champion)
{
case  2017:
   console.log('Pittsburgh Penguins '); 
break;


case  2016:
   console.log('Pittsburgh Penguins '); 
break;


case  2015:
   console.log('Chicago Blackhawks'); 
break;


case  2014:
   console.log('Los Angeles Kings'); 
break;


case  2013:
   console.log('Chicago Blackhawks'); 
break;


case  2012:
   console.log(' Los Angeles Kings'); 
break;

case  2011:
   console.log('Boston Bruins'); 
break;


case  2010:
   console.log('Chicago Blackhawks'); 
break;


case  2009:
   console.log('Pittsburgh Penguinas '); 
break;


case  2008:
   console.log(' Detroit Red Wings '); 
break;

case  2007:
   console.log('Anaheim Ducks '); 
break;


case  2007:
   console.log('Carolina Hurricanes'); 
break;
default:
    console.log(`${champion} was the ${year} NHL champion`);
}
if (year >= champion && year <= champion){
    console.log('Sorry, please try a differnt year');
}
