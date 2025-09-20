# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | 
**email** | **str** |  | 
**email_verified** | **bool** |  | [default to False]
**image** | **str** |  | [optional] 
**created_at** | **str** |  | [default to 'Generated at runtime']
**updated_at** | **str** |  | [default to 'Generated at runtime']
**two_factor_enabled** | **bool** |  | [optional] [readonly] [default to False]
**username** | **str** |  | [optional] 
**display_username** | **str** |  | [optional] 
**is_anonymous** | **bool** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**phone_number_verified** | **bool** |  | [optional] [readonly] 
**role** | **str** |  | [optional] [readonly] 
**banned** | **bool** |  | [optional] [readonly] [default to False]
**ban_reason** | **str** |  | [optional] [readonly] 
**ban_expires** | **str** |  | [optional] [readonly] 

## Example

```python
from better_auth.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


