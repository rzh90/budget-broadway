import PageTitle from "@/components/PageTitle"
import TicketInfoCard from "@/components/TicketInfoCard"

function Tickets() {
    return (
        <div className="mt-12 lg:mt-8">
            <PageTitle title={"Ticket Information"}>More information about discounted tickets</PageTitle>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <TicketInfoCard ticketType={"Lottery"}>
                    <p>Many Broadway shows have digital lotteries several days in advance or on the morning of each performance. Click the link to the discount for information on how to enter.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Rush"}>
                    <p>A limited number of rush tickets will be available for purchase online on the day of the performance. Click the link to the discount for information on how to purchase.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"General rush"}>
                    <p>A limited number of general rush tickets will be available at the box office on the day of the performance.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Standing room"}>
                    <p>Available at the box office on the day of the performance only if the show is sold out. Standing room patrons stand in numbered spaces that are the width of a regular seat.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Student rush"}>
                    <p>Available at the box office on the day of the performance. Valid student ID required.</p>
                </TicketInfoCard>
            </div>

            <PageTitle title={"Discount Ticket Programs"}>Discount programs and rewards</PageTitle>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <TicketInfoCard ticketType={"30 Under 35"}>
                    <p>Manhattan Theater Club's discount ticket program for theatregoers under 35. Check their <a href="https://www.manhattantheatreclub.com/join/30-under-35/" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Audience Rewards"}>
                    <p>Earn points for ticket purchases. Check their <a href="https://www.audiencerewards.com/" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Broadway Roulette"}>
                    <p>Broadway Roulette lets you select a date to see a random show. Check their <a href="https://www.broadwayroulette.com/" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Hiptix"}>
                    <p>Roundabout's discount ticket program for 18-40 year olds. Check their <a href="https://www.roundabouttheatre.org/get-tickets/hiptix/" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"LincTix"}>
                    <p>Lincoln Center Theater's discount ticket program for 21-35 year olds. Check their <a href="https://www.lct.org/linctix/" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
            </div>

            <PageTitle title={"Discount Codes"}>Discount codes and Broadway Week codes</PageTitle>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <TicketInfoCard ticketType={"Broadway Week"}>
                    <p>NYC Broadway Week is a semiannual event where Broadway shows offer 2-for-1 tickets. Check the NYC & Company <a href="https://www.nycgo.com/broadway-week" className="text-bbblue hover:text-bblightblue">website</a> for more information.</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"Playbill"}>
                    <p><a href="https://www.playbill.com/discount" className="text-bbblue hover:text-bblightblue">Playbill</a> discount codes</p>
                </TicketInfoCard>
                <TicketInfoCard ticketType={"TheaterMania"}>
                    <p><a href="https://www.theatermania.com/shows/new-york-city-theater/broadway?offer=discount" className="text-bbblue hover:text-bblightblue">TheaterMania</a> discount codes</p>
                </TicketInfoCard>
            </div>
        </div>
    )
}
export default Tickets