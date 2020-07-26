# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# create a method that takes in an array.
#filter through the array, return only odd numbers 
#select looks for true values
# getting error that % is an undefined method?????


# .odd? .even? doesn't work, but on the lecture notes when we learned it, it does.

# Just this first challenge took me all of saturday to do.
def odds_only array
    # create a variable to store odd numbers
    odds = []
    # iterate through every element of the array and 
    array.each do |value|
        # check if the value is an integer,
        if value.is_a?(Integer)
            # If it is, check if it's odd. If it is, shovel it into the odds array
            if value % 2 == 1
                odds << value
            end
        end
    end
    # ruby has implicit return so I put odds. sort as the last executed code to return that.
    odds.sort
end

# puts odds_only fullArr2
# puts odds_only fullArr1

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize(model, frame_size)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        @speed = 0
    end

    def get_info
        "The #{@model} bike has #{@wheels} wheels and a #{@frame_size}cm frame."
    end

    # -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
    def ring_bell
        'DING DING DING DING DING GET OUT OF MY WAY'
    end

    # -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
    def speed
        @speed
    end

    # -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
    def pedal_faster
        @speed += 5
    end

    def brake
        @speed = 0
    end
end

my_bike = Bike.new("Trek", 168)
not_my_bike = Bike.new("Boike", 200)
# puts not_my_bike.get_info

puts my_bike.get_info
# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

puts my_bike.ring_bell
# Expected output example: my_bike.ring_bell => 'Beep beep!'
puts my_bike.speed
# Expected output example: my_bike.speed => 0

puts my_bike.pedal_faster
puts my_bike.pedal_faster
# Expected output example: my_bike.pedal_faster 10 => 10

puts my_bike.brake
# Expected output example: my_bike.brake 15 => 0