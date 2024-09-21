import MoreEvents from "../components/Programs/AllEvents"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Events',
};
const EventsPage: React.FC = () => {
  return <MoreEvents />
}

export default EventsPage