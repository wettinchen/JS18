## JavaScript Chapter 18
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 18
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Classes are "syntactic sugar" in JS
        設定 class 名稱為 Pizza

###  2. Creating a simple class with a constructor
        設定 class 名稱為 Pizza，並使用 constructor 建構子

###  3. Using the keyword this
        使用 this 關鍵字指派 pizza.size 為 "medium"，pizza.crust 為 "original"

###  4. Adding a method to the class
        添加 bake 函數，稍後回傳 Baking a medium original crust pizza.

###  5. Classes are templates / blueprints for objects
        文字說明

###  6. Using the new keyword to create the object
        使用 new 關鍵字，宣告 myPizza 為指派的 Pizza()，

###  7. Calling the object's method
        使用宣告的 myPizza 和 bake 方法，回傳 Baking a medium original crust pizza.

###  8. Adding parameters to the constructor
        加入 pizzaType 參數至 constructor建構子，使用 this 關鍵字指派 pizza.size 為 pizzaType；在 new Pizza 設定參數為 pepperoni，回傳 Baking a medium original pepperoni crust pizza.

###  9. Passing multiple parameters to the constructor
        使用 this 關鍵字指派 pizza.size 為 pizzaSize，新增 pizzaSize 參數至 constructor建構子；在 new Pizza 新增參數 small，回傳 Baking a small pepperoni original crust pizza.；並回傳 pepperoni

### 10. Accessing properties with dot notation 
        修改 myPizza.type 為 supreme 並回傳

### 11. getters and setters
        設定 myPizza.pizzaCrust 為 thin，setter 方法中，藉由參數 pizzaCrust 回傳 thin 至使用 this 關鍵字的 pizza.crust；getter 方法中將 thin 回傳 this 關鍵字的 pizza.crust 取代 original，回傳 Baking a small pepperoni thin crust pizza.

### 12. A more readable getter and setter method
        將 get pizzaCrust() 修改為 getCrust()，
        將 set pizzaCrust() 修改為 setCrust()；並修改原本 myPizza.pizzaCrust = "thin"; 和 console.log(myPizza.pizzaCrust); 的語法

### 13. An array property with a getter and setter
        設定 this 關鍵字指派 pizza.toppings 為 空的 array;；getToppings() 回傳 this 關鍵字的 pizza.toppings，setToppings() 回傳 this 關鍵字的 pizza.toppings 推入配料的字串進入array；配料為 sausage 和 olives；並將結果傳入 getToppings()

### 14. A parent "super" class

### 15. Creating a child class with extends
        創設 child class 名稱為 SpecialtyPizza 從 Pizza class 延伸

### 16. The super keyword
        使用 super 關鍵字，從 parent class 提取參數 PizzaSize；設定 this 關鍵字指派 pizza.type 為 The Works；設定函數 slice() 作為方法，稍後回傳 Our The Works ${this.size} pizza has 8 slices.

### 17. No need to create a parent object in order to create a child object from the classes
        宣告 mySpecialty 為 new SpecialtyPizza("medium")，回傳 Our The Works medium pizza has 8 slices.

### 18. A naming convention for private properties
        使用命名方法轉換私有屬性，能稍微避免在其他人 Code 運作

### 19. Good intentions but not enforced by the code
        但沒有真正解決問題

### 20. Factory Functions
        建立函數名稱為 pizzaFactory，參數為 pizzaSize；
        在函數中宣告 crust 為 original，size 為 pizzaSize，
        回傳函數 bake() 方法，稍後回傳 Baking a ${size} original crust pizza.

### 21. Instantiating a pizza factory object
        宣告 myPizza 指派函數名稱pizzaFactory 的參數為 small，
        回傳 Baking a small original crust pizza.

### 22. Factory Functions solve the private properties problem
        用 scope 概念解決問題

### 23. New additions to JS allow public and private class fields
        (1)藉由 # 使用 private field，接著使用 hereYouGo() 方法，回傳 Here is your original traditional sauce large pizza.；使用 class　的名稱 Pizza 回傳 crust 的初始值 original
        (2)使用 child class 名稱 myPizza 和 getter 回傳 original
        (3)sauce 藉由 # 使用 private field，回傳 undefined
        (3)sauce 藉由 # 使用 private field，回傳 myPizza.sauce 會得到 undefined
        (4)sauce 藉由 # 使用 private field，回傳 myPizza.#sauce 會得到 Uncaught SyntaxError

### 24. How much support for public and private class fields?
        Can I use ___ ?
        https://caniuse.com/?cats=JS&statuses=all
