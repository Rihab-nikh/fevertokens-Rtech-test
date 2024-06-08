# fevertokens-Rtech-test

Running the app

git clone https://github.com/Rihab-nikh/fevertokens-Rtech-test.git

npm install

react-native run-ios | react-native run-android

Task 3:

I'll keep alternate driving left and right along the highway covering 2km each way and scanning both sides in case I saw the red car after marking the endpoint I'll return to the starting point and repeat the process while gradually increasing the distance until I find the car

Task 2:

with python 

for i in range(1, 101):
    affiche = False

    if i % 3 == 0:
        print("Hello", end='')
        affiche = True
    if i % 5 == 0:
        print("World", end='')
        affiche = True
    if i % 7 == 0:
        print("Yoo", end='')
        affiche = True
    if not affiche:
        print(i, end='')

    if i < 100:
        print(", ", end='')

print()


with Java:
public class Task2Algo {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            boolean affiche = false;

            if (i % 3 == 0) {
                System.out.print("Hello");
                affiche = true;
            }
            if (i % 5 == 0) {
                System.out.print("World");
                affiche = true;
            }
            if (i % 7 == 0) {
                System.out.print("Yoo");
                affiche = true;
            }
            if (!affiche) {
                System.out.print(i);
            }

            if (i < 100) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}


