import React from "react";
import CardCarousel from "../ui/CardCarousel";

const LatestReleases = [
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9678/1715546919678-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/238/1714983150238-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2846/1713992622846-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8130/1713474018130-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/138/1714406940138-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9787/1713798479787-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6427/1713947446427-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5575/1714587085575-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8095/1715162408095-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4642/1714374754642-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2169/1713409402169-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5415/1712648315415-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9654/1714729879654-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5614/1713964235614-v",
  },
];

const PopularShows = [
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7037/1657037-v-1a367e135b2e",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6843/1712060616843-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5200/1545200-v-390d8fbf1984",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2538/1711159622538-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/181/1713263230181-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6836/1626836-v-94cf52682493",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1703/1710946781703-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7503/1711193707503-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6133/1626133-v-63299843baed",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4642/1714374754642-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2169/1713409402169-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6397/1710076846397-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2817/1715519002817-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8707/1628707-v-10c2c9585f3c",
  },
];
const DramaDelight = [
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3389/1293389-v-6adbb88ca812",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3328/1713534213328-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3550/1373550-v-5a4379a25e99",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8227/1710929668227-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7835/907835-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6667/826667-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3777/1553777-v-064b6de27c65",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5375/1713503895375-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2383/1710933922383-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1613/1710949991613-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4764/1713429794764-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/61/1650061-v-a6c0dacefe4c",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3777/1553777-v-064b6de27c65",
  },
];

const PopularMovies = [
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5375/1713503895375-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1407/1713421661407-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/901/1710936280901-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1284/1713534181284-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8919/1714337828919-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6667/826667-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4764/1713429794764-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6717/1710929856717-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9003/1639003-v-31cc8eeb198f",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5616/1355616-v-08a190817b7b",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9155/1713415319155-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4108/1710950034108-v",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3270/1173270-v-b2cc135901b1",
  },
  {
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5549/1625549-v-4690c16ec69d",
  },
];

const Carousel = () => {
  return (
    <div className="absolute mt-96 top-56 left-10">
      <div className="text-slate-300 text-2xl font-semibold mb-2 ml-28">
        Latest Releases
      </div>
      <div className="left-0 w-full h-full">
        <CardCarousel cards={LatestReleases} />
      </div>
      <div className="text-slate-300 text-2xl font-semibold mb-2 ml-28">
        Popular Shows
      </div>
      <div className="left-0 w-full h-full">
        <CardCarousel cards={PopularShows} />
      </div>
      <div className="text-slate-300 text-2xl font-semibold mb-2 ml-28">
        Drama Delights
      </div>
      <div className="left-0 w-full h-full">
        <CardCarousel cards={DramaDelight} />
      </div>
      <div className="text-slate-300 text-2xl font-semibold mb-2 ml-28">
        Popular Movies
      </div>
      <div className="left-0 w-full h-full">
        <CardCarousel cards={PopularMovies} />
      </div>
    </div>
  );
};

export default Carousel;
