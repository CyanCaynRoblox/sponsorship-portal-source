// man i'm honestly so demotivated to work on the backend because of how annoying it usually is so this isnt the actual script
fn main() {
  let mut version = "v0.1";
  let mut versionPublished: bool = true;
  let mut testCount: i32 = 5;
  const programName: &str = "sponsorship portal";
  println!("Rust billing started at version {}, program {}", version, programName);
  loop {
   println!("test var equals {}", testCount );
    testCount += 1;
  if testCount > 10 {
    break;
    }
   }
}
