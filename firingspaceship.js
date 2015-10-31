// All the code for firing a laser
// The movement code is also there just in case i missed anything

var Speed:float = 4.0;

var laser:Rigidbody2D;
var laserSpeed:float = 20f;

function Start()
{

}

function Update()
{
	var laserInstance:Rigidbody2D;

 	MoveCharacter();
 	
 	if (Input.GetKey(KeyCode.RightArrow))
 		RotateRight ();
 		
 	if (Input.GetKey(KeyCode.LeftArrow))
 		RotateLeft ();
 		
 	if (Input.GetButtonDown("Fire1"))
 	{
 		laserInstance = Instantiate(laser, transform.position, transform.rotation);
 		laserInstance.velocity = transform.up * laserSpeed;
 	}
}

function MoveCharacter()
{	
	if(Input.GetKey(KeyCode.UpArrow))
 		transform.Translate(Vector3.up*Speed*Time.deltaTime);
}

function RotateLeft ()
{
	 transform.Rotate (Vector3.forward * 5);
}

function RotateRight ()
{
	 transform.Rotate (Vector3.forward * -5);
}
