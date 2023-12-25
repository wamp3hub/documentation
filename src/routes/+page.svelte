<script>
import LinkButton from '~/components/buttons/Link.svelte'
</script>

<main id="landing-page">
    <div class="feature-section">
        <div class="left">
            <h1>Effective and Reliable Communication for Your Application</h1>
            <p>
                Introducing the Web Application Messaging Protocol (WAMP), a powerful solution for real-time communication,
                multiplayer games, Internet of Things networks and much more. With WAMP, you can ensure that your messages
                reach their destination with speed and reliability.
            </p>
            <LinkButton href="/introduction/wamp">Learn More</LinkButton>
        </div>
        <div class="right">
        </div>
    </div>
    
    <div class="feature-section">
        <div class="left">
            <h3>Create robust microservices that communicate seamlessly with each another using RPC</h3>
            <p>
                You are able to create different types of microservices. You can choose the technology that best suits your needs,
                with support for a range of client libraries like JavaScript, Python, and Go.
            </p>
            <LinkButton href="/usage/rpc">Learn More</LinkButton>
        </div>
        <div class="right">
    
        </div>
    </div>
    
    <div class="feature-section">
        <div class="left">
            <h3>Implement an event-driven architecture using PubSub, which uses events to trigger microservices</h3>
            <p>You have the option to include or exclude subscribers when publishing events.</p>
            <LinkButton href="/usage/publish-subscribe">Learn More</LinkButton>
        </div>
        <div class="right">
    
        </div>
    </div>
    
    <div class="feature-section">
        <div class="left">
            <h3>Stream Your Data with Ease</h3>
            <p>Use a yield statement to stream a large quantity of data and then iterate over the remote generator.</p>
            <LinkButton href="/usage/generator">Learn More</LinkButton>
        </div>
        <div>
    
        </div>
    </div>
    
    <div class="feature-section">
        <div class="left">
            <h3>Scale Your Network Without the Need for Reboots</h3>
            <p>Simply initiate a new router instance and link it to a current network using wamp3bridge.</p>
            <LinkButton href="/router/installation">Learn More</LinkButton>
        </div>
        <div class="right">

        </div>
    </div>
</main>

<style lang="scss">
@import '~/styles/domain.scss';

$mobile-width: 600px;

#landing-page {
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .feature-section {
        width: 100%;
        height: 100%;

        .left {
            p {
                font-size: $font-size-m;
            }
        }
    }

    @media screen and (min-width: $mobile-width) {
        .feature-section {
            padding: 64px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 64px;

            .left {
                h1 {
                    font-size: $font-size-xxl;
                }

                h3 {
                    font-size: $font-size-l;
                }

                p {
                    margin-top: 32px;
                    margin-bottom: 48px;
                }
            }
        }
    }

    @media screen and (max-width: $mobile-width) {
        .feature-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 16px;

            .left {
                h1 {
                    font-size: $font-size-l;
                }

                h3 {
                    font-size: $font-size-xm;
                }

                p {
                    margin-top: 16px;
                    margin-bottom: 32px;
                }
            }
        }
    }
}
</style>