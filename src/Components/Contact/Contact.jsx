import PageBanner from '../Common/PageBanner';
import ContactForm from './ContactForm';
import Map from './Map';
import AboutFooter from '../AboutUs/AboutFooter';

const Contact = () => {
  return (
    <>
      <div>
        <PageBanner
          badge="HQ TELEMETRY // COMMUNICATIONS"
          title="TRANSMIT TO"
          highlight="WARCLUB HQ"
          subtitle="Connect directly with tournament marshals, sponsorship liaisons, or technical support operators."
          breadcrumb="Contact Us"
          stats={[
            { label: 'HQ LOCATION', value: 'MANCHESTER, UK' },
            { label: 'RESPONSE TIME', value: '< 15 MIN' },
            { label: 'SUPPORT DESK', value: '24/7 LIVE' },
          ]}
        />

        <div>
          <ContactForm></ContactForm>
        </div>

        <div className="mt-32">
          <Map></Map>
        </div>

        <div className="mt-20 md:mt-24">
          <AboutFooter></AboutFooter>
        </div>
      </div>
    </>
  );
};

export default Contact;
