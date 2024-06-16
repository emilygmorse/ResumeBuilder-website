Website for modularly building a resume

Features for minimum viable product:
- Create new resume using building blocks like skills, experience, education, etc
- Create new work experience entries with editable bullet points that can be selected for inclusion
- Version tracking for bullet points with a setting for default, and the ability to save and change word choices
- Set of skills that is selectable for each resume, along with a default set
- Save all resumes along with a tag for company name, job title, and link to application
- tracking whether selected information will fit on one page
  
  Stretch features:
  - multiple resume formats   
  - attach application tracking to each resume
  - email querying to automatically update the application tracking
  - Archive old resumes
  - Data analysis dashboard to track the success of each resume, bullet point, etc
  

  ## Tentative site architecture 

  ### Login
    Redirects to Home
  ### Home 
    - Recent Resumes *contains cards with some previous resumes, button to see all*
    - Create new Resume *button to redirect to create new resume page*
    - Skills 
      - Cards with default skill set
      - Button to redirect to skills page
    - Education 
      - Card with default education
      - button to education page
  ### Create New Resume
    - Name of document, meta data (company, job, etc)
    - Header *autofill with default info, click to edit*
    - Skills *contains a card for default skill set, button to select new skill set* 
      - Add new skill *type in a new skill*
      - Cards for existing skills with edit, view version history, select buttons
      - Save skill set button
    - Education *autofill with default, click to edit*
        - Add new education
        - Cards with education *select which ones to include or edit*
    - Work Experience *large section of the page*
        - Add new experience
        - Cards with default work experience, selected bullet points
        - Cards have edit buttons with expands the bullet point options for each experience, with each bullet point having edit, select, and version history. Plus the ability to add new work experience
    - Submit Button *submits all info and shows in proper resume formatting* 
  ### Resumes
    - All resumes *cards contain company name, job title, last modified*
    - Create New Resume button
  ### Skills
    - Default skill set
    - Create new skill set *redirects to create new skill set page*
      - Skill cards with select buttons
      - add skill
      - complete skill set button
    - All skill sets
    - All skills *cards with edit, view version history, and delete*
    - Create new skill
  ### Education
    - default education *edit button*
    - Add new education
    - Cards with education
