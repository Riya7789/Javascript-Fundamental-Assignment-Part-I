// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// (Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.)

function Cylinder(height, diameter) 
        {
            this.height = height;
            this.diameter = diameter;
        }

        Cylinder.prototype.Volume = function () 
        {
            var radius = this.diameter / 2;
            return this.height * Math.PI * radius * radius;
        };

        var cyl = new Cylinder(7, 4);
        // Volume of the cylinder with four decimal places.
        console.log('volume =', cyl.Volume().toFixed(4));