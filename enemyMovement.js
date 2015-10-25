// 25/10/2015
// Not working 

#pragma strict
var heroObj:GameObject;
var enemySpeed:float;

function Start()
{
	enemySpeed = 1.0;
}

function Update()
{
	enemyMove();
}

function enemyMove(){
	heroObj = GameObject.Find("hero");
	enemyAnimator = GetComponent("Animator"); 
	if (heroObj != null)	{
		if (transform.position.y > heroObj.transform.position.y){
			transform.Translate(Vector3.down * enemySpeed * Time.deltaTime); 
			 	
		}
		else{
			transform.Translate(Vector3.up * enemySpeed * Time.deltaTime); 
		}
		
		if (transform.position.x < heroObj.transform.position.x){
			transform.Translate(Vector3.right * enemySpeed * Time.deltaTime); 
		}
		else{
			transform.Translate(Vector3.left * enemySpeed * Time.deltaTime); 
		}
	}
}
