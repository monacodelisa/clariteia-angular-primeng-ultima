# Angular SPA FrpFront - Clariteia 

# [VIEW LIVE](rfp-platform-primeng-ultima.monacodelisa.com)

### Client to be avoided

## Tech:
- Angular v17
- PrimeNG UI library
- Ultima template for PrimeNG (was not disclosed I do not recommend it)
 
## Working on an app without being provided endpoints

### If I hadn't been constrained to using only the Ultima template components, my approach to this project would have been fundamentally different, diverging from the strategies I've employed in my previous projects.

## Deliverables provided - coded from scratch
- Projects module matching a figma design integrated using Ultima Template 
  - list of projects - view involving serious customizations to match the provided Figma design since it includes elements not natively supported by PrimeNG or by Ultima template
  - New project view which I implemented as a stepper containing 3 steps 
  - Step 1 view - Uploading documents
    - matching to a Figma design by incorporating and customizing multiple prebuilt Ultima template components
    - creating a project validating that the project's name is not blank and displaying a custom error message if it does
    - validating that the project's name does not include invalid characters and displaying a custom error message if it does
    - validating min and max length of the project's name and displaying a custom error message if it does not match the requirement
    - file uploads - had to be simulated since no endpoints were provided
    - mime checks for the supported file format and displaying a custom error message if the file format is not supported
    - max file size check and displaying a custom error message if the file is too large
    - preventing upload if requirements are not met
  - Step 2 view - Team members
      - matching a Figma design by incorporating and customizing multiple prebuilt Ultima template components
      - displaying a list of team members - had to be mock data since no endpoints were provided
      - added a popup dialog  with customizations to match the Figma design
      - displaying a mock list of available team members that can be selected individually
      - ability to add new team members from within the popup dialog 
      - adding selected team members from the dialog to the main list of members
   - Step 3 view - Reviewing Information
     - displaying the information collected from the previous steps by using PrimeNG tab view and customizing it to match the Figma design

## Additional work involved
- creating and maintaining an Angular app 
- working with Git & Github managing version control, issues, creating PRs, working with GitHub actions & workflows
- performing testing, Karma unit testing was done locally
- integrating modules to an otherwise meant-to-be standalone v17 application
- making adjustments to the Angular routing
- steering away from regular Angular practices to fit in within the constraints of Ultima template

## [Screenshots](/screenshots/)

