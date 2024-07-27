// src/App.js
import React from 'react';
import FlashCardList from './FlashCardList';
import '@fortawesome/fontawesome-free/css/all.css';
import civil  from './civil';
import commercial from './commercial';
import criminal from './criminal';
import labor from './labor';
import legalethics from './legal-ethics';
import political from './political';
import remedial from './remedial';
import taxation from './taxation';

import SearchBox from './components/SearchBox'
import ControlButtonsContainer from './components/ControlButtonsContainer'
import AddNoteButton from './components/AddNoteButton'
import ProgressionIndicator from './components/ProgressionIndicator'
import NotesList from './components/NotesList'
import NotesForm from './components/NotesForm'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './styles/AppStyle'
import { useNavigate } from 'react-router-dom';

const App = () => {
  const subject = localStorage.getItem('item');
  const classes = useStyles()
  const isAuthenticated = localStorage.getItem('authenticated')
  const navigate = useNavigate();

  console.log(isAuthenticated)

  if (isAuthenticated == null || isAuthenticated === undefined || isAuthenticated !== 'true'){
    localStorage.setItem('item', 'Civil Law')
    navigate('/signin');
  }else{
    return (

      <div className="App">
        { subject === 'Civil Law' && <FlashCardList flashcards={civil} />  }
        { subject === 'Commercial Law' && <FlashCardList flashcards={commercial} />  }
        { subject === 'Criminal Law' && <FlashCardList flashcards={criminal} />  }
        { subject === 'Labor Law' && <FlashCardList flashcards={labor} />  }
        { subject === 'Legal Ethics Law' && <FlashCardList flashcards={legalethics} />  }
        { subject === 'Political Law' && <FlashCardList flashcards={political} />  }
        { subject === 'Remedial Law' && <FlashCardList flashcards={remedial} />  }
        { subject === 'Taxation Law' && <FlashCardList flashcards={taxation} />  }
        { subject === 'Notes' && 
              <div className={classes.root}>
              <Grid container spacing={3} direction="column" className="notes">
                <Grid item xs={12}>
                  <SearchBox />
                </Grid>
                <Grid item container>
                  <Grid item sm={9} xs={12} container>
                    <ControlButtonsContainer />
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <AddNoteButton />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ProgressionIndicator />
                </Grid>
                <Grid item xs={12}>
                  <NotesList />
                </Grid>
              </Grid>
              <NotesForm />
            </div>
        }
      </div>
    );
  }
};

export default App;
