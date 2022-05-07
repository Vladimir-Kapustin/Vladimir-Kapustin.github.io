#r "d:\Repos\Vladimir-Kapustin.github.io\C#\Newtonsoft.Json.dll"

public class Person 
{
    public Person (string LastName, String firstName, string middleName)
    {
        LastName = lastName;
        FirstName = firstName;
        MiddleName = middleName;
    }

    public string FirstName {get;set;}
    public string LastName {get;set;}
    public string MiddleName {get;set;}
}
