## ADDED Requirements

### Requirement: Landing Page
The landing page SHALL display a hero section with a prominent background image and the farm name "Moinhos Do Dao - Eco Quinta", followed by highlight boxes showcasing key features of the farm.

#### Scenario: User visits homepage
- **WHEN** user navigates to /
- **THEN** hero section with farm branding is displayed
- **AND** highlight boxes show links to activities, cottage, and contact

### Requirement: Activities Blog
The activities page SHALL list all farm activities, each linking to an individual page with text content and images.

#### Scenario: User browses activities
- **WHEN** user navigates to /activities
- **THEN** a list of all activities is displayed with titles and thumbnails

#### Scenario: User views activity detail
- **WHEN** user clicks on an activity
- **THEN** individual page shows full description and images

### Requirement: Contact Page
The contact page SHALL provide an email contact form, physical address, and location map that opens Google Maps when clicked.

#### Scenario: User sends contact email
- **WHEN** user fills in name, email, and message and clicks send
- **THEN** local email client opens with pre-filled email to {{EMAIL_PLACEHOLDER}}

#### Scenario: User views location
- **WHEN** user clicks on the map or address
- **THEN** Google Maps opens with the farm location

### Requirement: Boa Vista Cottage Rental
The Boa Vista page SHALL display a photo gallery and booking form with date selection. Submitting the booking SHALL open the email client with selected dates pre-filled.

#### Scenario: User views cottage gallery
- **WHEN** user navigates to /boa-vista
- **THEN** photo gallery displays cottage images

#### Scenario: User books cottage
- **WHEN** user selects check-in and check-out dates and clicks book
- **THEN** email client opens with subject "Booking Request: Boa Vista Cottage" and body containing selected dates

### Requirement: Site Navigation
The site SHALL have a consistent header with navigation links to all pages and a footer with contact information.

#### Scenario: User navigates site
- **WHEN** user is on any page
- **THEN** header displays links to Home, Activities, Boa Vista, Contact
- **AND** footer displays farm contact information
