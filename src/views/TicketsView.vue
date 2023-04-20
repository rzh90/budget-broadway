<template>
    <div class="mt-12 lg:mt-8">

        <!-- discount tickets -->
        <PageTitle title="Ticket Information">More information about discounted tickets</PageTitle>
        <section class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <TicketInfoCard>
                <template v-slot:header>Lottery</template>
                <template v-slot:content>Many Broadway shows have digital lotteries several days in advance or on the morning of each performance. Click the link to the discount for information on how to enter.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Rush</template>
                <template v-slot:content>A limited number of rush tickets will be available for purchase online on the day of the performance. Click the link to the discount for information on how to purchase.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>General rush</template>
                <template v-slot:content>A limited number of general rush tickets will be available at the box office on the day of the performance.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Standing room</template>
                <template v-slot:content>Available at the box office on the day of the performance only if the show is sold out. Standing room patrons stand in numbered spaces that are the width of a regular seat.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Student rush</template>
                <template v-slot:content>Available at the box office on the day of the performance. Valid student ID required.</template>
            </TicketInfoCard>
        </section>

        <!-- discount ticket programs -->
        <PageTitle title="Discount Ticket Programs">Discount programs and rewards</PageTitle>
        <section class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <TicketInfoCard>
                <template v-slot:header>30 Under 35</template>
                <template v-slot:content>Manhattan Theater Club's discount ticket program for theatregoers under 35. Check their <a href="https://www.manhattantheatreclub.com/join/30-under-35/" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Audience Rewards</template>
                <template v-slot:content>Earn points for ticket purchases. Check their <a href="https://www.audiencerewards.com/" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Broadway Roulette</template>
                <template v-slot:content>Broadway Roulette lets you select a date to see a random show. Check their <a href="https://www.broadwayroulette.com/" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Hiptix</template>
                <template v-slot:content>Roundabout's discount ticket program for 18-40 year olds. Check their <a href="https://www.roundabouttheatre.org/get-tickets/hiptix/" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>LincTix</template>
                <template v-slot:content>Lincoln Center Theater's discount ticket program for 21-35 year olds. Check their <a href="https://www.lct.org/linctix/" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>
        </section>

        <!-- discount codes -->
        <PageTitle title="Discount Codes">Discount codes and Broadway Week codes</PageTitle>
        <section class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <TicketInfoCard>
                <template v-slot:header>Broadway Week</template>
                <template v-slot:content>NYC Broadway Week is a semiannual event where Broadway shows offer 2-for-1 tickets. Check the NYC & Company <a href="https://www.nycgo.com/broadway-week" class="text-bbblue hover:text-bblightblue">website</a> for more information.</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>Playbill</template>
                <template v-slot:content><a href="https://www.playbill.com/discount" class="text-bbblue hover:text-bblightblue">Playbill</a> discount codes</template>
            </TicketInfoCard>

            <TicketInfoCard>
                <template v-slot:header>TheaterMania</template>
                <template v-slot:content><a href="https://www.theatermania.com/shows/new-york-city-theater/broadway?offer=discount" class="text-bbblue hover:text-bblightblue">TheaterMania</a> discount codes</template>
            </TicketInfoCard>
        </section>
    </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue"
import TicketInfoCard from "../components/TicketInfoCard.vue"

export default {
    name: "TicketsView",
    components: { PageTitle, TicketInfoCard }
}
</script>