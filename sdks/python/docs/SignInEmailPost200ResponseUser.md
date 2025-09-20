# SignInEmailPost200ResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**email** | **str** |  | 
**name** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**email_verified** | **bool** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from better_auth.models.sign_in_email_post200_response_user import SignInEmailPost200ResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of SignInEmailPost200ResponseUser from a JSON string
sign_in_email_post200_response_user_instance = SignInEmailPost200ResponseUser.from_json(json)
# print the JSON string representation of the object
print(SignInEmailPost200ResponseUser.to_json())

# convert the object into a dict
sign_in_email_post200_response_user_dict = sign_in_email_post200_response_user_instance.to_dict()
# create an instance of SignInEmailPost200ResponseUser from a dict
sign_in_email_post200_response_user_from_dict = SignInEmailPost200ResponseUser.from_dict(sign_in_email_post200_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


