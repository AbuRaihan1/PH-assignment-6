import { Accordion } from "flowbite-react";

const AboutFaq = () => {
  return (
    <>
      <div className="text-center text-2xl md:text-3xl font-bold">
        <h2>Frequently Ask Questions</h2>
      </div>
      <Accordion className="w-full md:max-w-xl mx-auto my-12">
        <Accordion.Panel>
          <Accordion.Title>What is our mission?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our mission is to create a hunger-free world by providing
              nutritious meals to those in need. We believe that everyone
              deserves access to food and hope.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How do you ensure transparency and accountability?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We maintain transparent financial records and regularly share
              updates with our supporters. Additionally, we work with
              independent auditors to ensure accountability.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Where does the food come from?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We collaborate with local food banks, restaurants, and generous
              donors. Together, we rescue surplus food and distribute it to
              those who need it most.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            Can I refer someone in need to your organization?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely! If you know someone who requires assistance, please
              reach out to us. We’re here to help.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default AboutFaq;
