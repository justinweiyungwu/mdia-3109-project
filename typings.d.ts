
interface BillboardData{
  chart: {
    entries: {
      title: string;
      artist: string;
    }[];
    nextWeek: {
      data: string;
      url: string;
    };
    previousWeek: {
      data: string;
      url: string;
    };
    week: string;
  }
}