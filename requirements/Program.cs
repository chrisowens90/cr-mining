using System;

namespace Statemachine
{
    internal static class Program
    {
        static void Main()
        {
            Crossing crossing = new Crossing();

            Console.WriteLine(crossing.State);
            // output: light A = red
            // output: light B = green

            crossing.PushButton(Trigger.Button1);
            // output: light A = red
            // output: light B = orange

            // output: light A = green
            // output: light B = red

            crossing.PushButton(Trigger.Button1);

            crossing.PushButton(Trigger.Button2);
            // output: light A = orange
            // output: light B = red

            // output: light A = red
            // output: light B = green

            crossing.PushButton(Trigger.Button2);
        }
    }
}
