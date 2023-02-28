import PageTitle from "@/components/PageTitle"
import TicketInfoCard from "@/components/TicketInfoCard"

function Tickets() {
    return (
        <div className="mt-12 lg:mt-8">
            <PageTitle title={"Ticket information"}>More information about discounted tickets</PageTitle>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <TicketInfoCard ticketType={"Lottery"}>
                    <p>Many Broadway shows have digital lotteries several days in advance or on the morning of each performance. Click the link to the discount for information on how to enter.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"Rush"}>
                    <p>A limited number of rush tickets will be available for purchase online the day of the performance. Click the link to the discount for information on how to purchase.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"General rush"}>
                    <p>A limited number of general rush tickets will be available at the box office on the day of the performance.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"Student rush"}>
                    <p>Available at the box office on the day of the performance. Valid student ID required.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"Standing room"}>
                    <p>Available at the box office on the day of the performance only if the show is sold out. Standing room patrons stand in numbered spaces that are the width of a regular seat.</p>
                </TicketInfoCard>
            </div>

            <PageTitle title={"Discount ticket programs"}>30 Under 35, Hiptix, LincTix</PageTitle>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <TicketInfoCard ticketType={"30 Under 35"}>
                    <p>Manhattan Theater Club's discount ticket program for theatregoers under 35. Check their <a href="https://www.manhattantheatreclub.com/join/30-under-35/" className="text-bbblue mb-2">website</a> for more information.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"Hiptix"}>
                    <p>Roundabout's discount ticket program for 18-40 year olds. Check their <a href="https://www.roundabouttheatre.org/get-tickets/hiptix/" className="text-bbblue mb-2">website</a> for more information.</p>
                </TicketInfoCard>

                <TicketInfoCard ticketType={"LincTix"}>
                    <p>Lincoln Center Theater's discount ticket program for 21-35 year olds. Check their <a href="https://www.lct.org/linctix/" className="text-bbblue mb-2">website</a> for more information.</p>
                </TicketInfoCard>
            </div>
        </div>
    )
}
export default Tickets