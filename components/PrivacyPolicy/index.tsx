import React, { FC } from 'react'
import styles from './styles.module.css'

const PrivacyPolicy: FC = () => {
	return (
		<main className={styles.privacy__policy}>
			<h1 className={styles.heading}>Privacy Policy - Infigon Futures by Manom Technologies Private Limited </h1>

			<section className={styles.section}>
				<h2 className={styles.section__heading}> 1. Introduction </h2>
				<p className={styles.section__para}>
					At Infigon Futures, we prioritize the privacy and security of our users. This Privacy Policy
					outlines how we collect, use, disclose, and protect your information when you interact with our
					services. By using our website and services, you agree to the terms of this Privacy Policy.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>2. Information We Collect </h2>
				<p className={styles.section__para}> We may collect the following types of information: </p>
				<ul className={styles.section__list}>
					<li>
						<span className={styles.list__item__title}>Personal Information:</span>
						Includes your name, email, phone number, and other identifiable details.
					</li>

					<li>
						<span className={styles.list__item__title}>Usage Data: </span> Information about how you use our
						website, including IP address, browser type, and interaction with our platform.
					</li>

					<li>
						<span className={styles.list__item__title}> Educational and Professional Data: </span> For
						program participants and clients, we may collect data related to educational background, career
						preferences, and any other information necessary for counseling.
					</li>

					<li>
						<span className={styles.list__item__title}>Payment Information:</span> For processing
						enrollments, we collect billing information. However, all payment processing is conducted by
						secure third-party payment processors and is not stored on our servers.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}> 3. Use of Information</h2>

				<p className={styles.section__para}> Infigon Futures uses collected information to: </p>
				<ul className={styles.section__list}>
					<li>Provide, personalize, and improve our services</li>
					<li> Communicate with you regarding updates, promotions, or other relevant information. </li>
					<li>
						Maintain the integrity of counselor-client interactions, stored in our secure digital repository
						for training and quality assurance.
					</li>

					<li>Ensure a smooth user experience on our marketplace for educational products and services.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>4. Information Sharing and Disclosure</h2>
				<p className={styles.section__para}>
					We value your privacy and ensure that your personal information is never shared, sold, or rented to
					third parties without your consent, except in the following situations:
				</p>

				<ul className={styles.section__list}>
					<li>
						<span className={styles.list__item__title}>Service Providers:</span> We may share information
						with trusted third parties who assist us in operating our website, conducting our business, or
						serving our users, provided they agree to keep this information confidential.
					</li>

					<li>
						<span className={styles.list__item__title}>Legal Compliance:</span> We may disclose information
						if required by law, in response to legal processes, or to protect our rights and safety or those
						of others.
					</li>
					<li>
						<span className={styles.list__item__title}>Business Transfers:</span> In the event of a merger,
						acquisition, or sale of all or a portion of our assets, user information may be transferred as
						part of that transaction.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>5. Data Security</h2>
				<p className={styles.section__para}>
					Infigon Futures takes reasonable and appropriate measures to protect your data from unauthorized
					access, alteration, or disclosure. This includes:
				</p>

				<ul className={styles.section__list}>
					<li>
						<span className={styles.list__item__title}>Encryption:</span> We use industry-standard
						encryption protocols to safeguard sensitive information, including financial and personal data.
					</li>
					<li>
						<span className={styles.list__item__title}>Access Controls:</span> Only authorized personnel
						have access to personal data, and they are trained on data privacy practices.
					</li>

					<li>
						<span className={styles.list__item__title}>Regular Security Assessments:</span> We periodically
						review and update our security practices to ensure your data&apos;s safety.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>6. Data Retention</h2>
				<p className={styles.section__para}>
					We retain personal data only as long as necessary for the purposes outlined in this policy or as
					required by law. Data specific to counseling sessions and certifications may be retained
					indefinitely to provide continued support and service.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>7. Third-Party Links</h2>
				<p className={styles.section__para}>
					Our website may contain links to other sites. Infigon Futures is not responsible for the privacy
					practices or content of these external sites. We encourage you to read their privacy policies before
					engaging with them.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>8. Children&apos;s Privacy</h2>
				<p className={styles.section__para}>
					Our services are intended for students from Grade 6 and older, with parental consent required for
					minors. We do not knowingly collect information from children under 13. If you believe we have
					collected such information, please contact us for removal.
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>9. Changes to this Privacy Policy</h2>
				<p className={styles.section__para}>
					Infigon Futures reserves the right to modify this Privacy Policy at any time. We will notify you of
					changes by posting the new Privacy Policy on this page. We encourage you to review it periodically
				</p>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__heading}>10. Contact Us</h2>
				<p className={styles.section__para}>
					If you have questions about this Privacy Policy, please contact us at:
				</p>
				<address className={styles.section__list}>
					<div className='flex gap-0.5'>
						<span className={styles.list__item__title}>Email:</span>
						<a href='mailto:support@infigonfutures.com'>support@infigonfutures.com</a>
					</div>
					<div className='flex gap-0.5'>
						<span className={styles.list__item__title}>Address:</span>
						Gala Number 213, Jafferbhoy Industrial Estate,
						<br />
						Makwana Road, Marol Naka, Andheri East,
						<br /> Mumbai - 400059
					</div>
					<div className='flex gap-0.5'>
						<span className={styles.list__item__title}>Phone:</span>
						<a href='tel:+919769268512'>+91-9769268512</a>
					</div>
				</address>
			</section>
		</main>
	)
}

export default PrivacyPolicy
