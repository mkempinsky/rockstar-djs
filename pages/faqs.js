import Container from '../components/Container';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import FaqCard from '../components/FaqCard';
import {BREAKPOINT} from '../lib/styles';
import {useEffect} from 'react';
import {scrollToElement} from '../lib/utils';

const Faqs = (props) => {
    return (
        <div>
            <Layout>
                <PageHeading />

                <Container>
                    <h1 id="page-faqs-header">FAQs</h1>
                    <FaqCard title="Why do you cost more than some other companies in town?">
                        This is easily the most common question we are asked and honestly,
                        we understand. We know that every couple is on a budget, and also,
                        that weddings can get pretty expensive! That being said, once you
                        understand the reasons why we may cost a bit more, and compare
                        that price difference to the overall cost of your wedding, you
                        will find that the investment in your reception is well worth
                        ensuring that your night is memorable! We are not the cheapest,
                        nor the most expensive DJ company in our market. There are
                        companies that charge half of what we cost, and companies that
                        charge twice as much. So why do we cost more than some of our
                        competitors? The answer is simple, we only hire the most qualified
                        entertainers in the area. We pay these talented individuals as
                        well or better than any of our competitors. As a result, we have
                        almost ZERO turnover on staff, which means{' '}
                        <strong>
                            your reception will not be in the hands of a “new guy”
                        </strong>
                        , but rather one of the best trained and most polished DJ/MCs in
                        our region!
                    </FaqCard>
                    <FaqCard title="How important is excellent entertainment at a reception?">
                        This one ties into the above question. We strive to be the
                        absolute, hands down, best DJ company in our region, and provide a
                        level of entertainment that no other DJ service can match.
                        Unfortunately, entertainment is often the last vendor chosen, and
                        far too often, the budget left over will not allow for excellent
                        entertainment. We do understand that absolutely everyone is on a
                        budget, and that we might not be the best fit for every couple.
                        But if excellent entertainment is a top priority of yours, and you
                        recognize that your guests will absolutely remember whether or not
                        they were dancing the night away, we are the premium DJ service
                        for you!
                    </FaqCard>
                    <FaqCard title="So, why are you better than the other DJs in town?">
                        One of the best compliments I have received as the owner was when
                        another wedding professional said, “There are so many bad DJs out
                        there that just don’t get it. You guys get it.” Our DJs are not
                        “over the top” or “cheesy”, and we know that YOU are the star of
                        the show, not us! We will work with you to get YOUR music
                        playlist, and make YOUR night perfect. We don’t need to try and
                        steal the show. As simple as it sounds, we get it!
                    </FaqCard>
                    <FaqCard title="What is included in your DJ packages and what is the difference between them?">
                        All of our packages include two powered speakers, lighting for the
                        dance floor, our full digital music library (spanning from the
                        1940s to today's current hits), a wireless microphone for any
                        announcements throughout the evening, and most importantly, one of
                        the most talented DJ/MCs available! <br />
                        The only difference between our packages is the specific DJ in
                        charge of your reception. With our Standard Package, you will be
                        assigned a DJ 5-8 weeks prior to your celebration. With the Select
                        Package, you are given the peace of mind of knowing exactly who
                        will be your DJ and with our Elite Package, you are guaranteed to
                        have the owner of our company, Quain Tull as the DJ taking care of
                        your celebration!
                    </FaqCard>
                    <FaqCard title="How would you describe your MC style?">
                        Although we are a varied group of personalities, in general, we
                        share the same MC philosophy. Each of our DJs is trained to
                        welcome your guests, and clearly announce all of the events of the
                        evening. We will make more announcements towards the beginning of
                        your reception (wedding party introduction, who will be giving
                        toasts, etc.), but once the dancing starts, we take more of a back
                        seat.
                        <br />
                        It seems that almost everyone has seen the DJ that "just won't
                        shut up", or that talks in between every song. We are annoyed by
                        it too, and once the party is started, our job is to keep it going
                        with great music choices and rock solid fades. We don't feel that
                        need to "be/steal the show", and we think your guests will greatly
                        appreciate a break from the obnoxious DJs!
                    </FaqCard>
                    <FaqCard title="How large is your music library?">
                        Essentially unlimited. If there is a song that you would like at
                        your reception, and we don't already have a copy in our library,
                        we will get one at no additional cost to you.
                    </FaqCard>
                    <FaqCard title="What is the DJ booking and planning process?">
                        Once you decide that Rockstar DJs is the best fit for your
                        reception, we only require the $300 deposit and signed agreement
                        to be returned to us. Once both are received, you will receive an
                        official confirmation email and login information for our online
                        planning program.
                        <br />
                        During the planning process, we are always here to help and your
                        DJ will be reaching out about a month before your reception to
                        begin running over final details.
                    </FaqCard>
                    <FaqCard title="What lighting do you bring?">
                        Each of our DJ packages include LED lighting to create a fun
                        atmosphere around the dance floor. Our display is bright enough to
                        help get people dancing, without being obnoxious or looking like
                        we are setting up for a rock concert.
                        <br />
                        We also have additional uplighting and decor packages available.
                        Let us know what you envision at your reception, and we will help
                        you create the perfect ambiance!
                    </FaqCard>
                    <FaqCard title="Can we pick our own music?">
                        Absolutely! This is your big day, not ours, and we are there to
                        help create your perfect reception! You can pick as many or as few
                        requests, favorite artists or genres as you would like.
                    </FaqCard>
                    <FaqCard title="Do you take song requests from guests?">
                        This one is completely up to you. We prefer to do so, as it helps
                        your guests get actively involved in your reception. If your main
                        reservation is that one of your guests may request a terrible
                        song, keep in mind that the DJ will still use his common-sense
                        filter to determine which requests are played.
                    </FaqCard>
                    <FaqCard title="In case of emergency, do you have backups?">
                        We have both! We never fully book solid on either DJs or
                        equipment, so that we are always prepared for the unexpected.
                        Hopefully, we will never need our on-call manager, but he will be
                        there regardless, just in case.
                    </FaqCard>
                    <FaqCard title="What is your return policy and privacy policy?">
                        In order to process payments through our merchant services
                        account, we must clearly present both our return and privacy
                        policies on our site. As we are a service-based company, with no
                        product to "return", here they are:
                        <br />
                        <strong>Return policy:</strong> We train hard and work hard to
                        make sure every single detail of your celebration goes according
                        to your plan. If anything is ever less than satisfactory, we want
                        to know and will make every reasonable effort to make things
                        right. <br />
                        <strong>Privacy policy:</strong> We collect our clients' contact
                        information for the sole purpose of contacting them to plan their
                        celebration via our online planning website. We never sell or
                        distribute any contact information to any other third party.
                        Honestly, we don't even know how to do so, and we see no reason
                        whatsoever to compromise our clients' privacy.
                    </FaqCard>
                </Container>
            </Layout>
            <style jsx>
                {`
                    h1 {
                        margin-bottom: 30px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        h1 {
                            margin-bottom: 60px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Faqs;
