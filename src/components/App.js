import data from "./data.json";
import teamList from "./team-list.json";
import  { Section }  from './Section'
import  { FeautureList }  from './FeaturesList'
import { TeamList } from "./TeamList";



function App() {
  return (
    <>
      <Section>
        <FeautureList features={data} />
      </Section>
      <Section>
          <TeamList teamList={teamList} />
      </Section>
    </>
      
    
  );
}

export default App;
