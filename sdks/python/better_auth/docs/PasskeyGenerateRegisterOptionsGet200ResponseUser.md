# PasskeyGenerateRegisterOptionsGet200ResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 

## Example

```python
from better_auth.models.passkey_generate_register_options_get200_response_user import PasskeyGenerateRegisterOptionsGet200ResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of PasskeyGenerateRegisterOptionsGet200ResponseUser from a JSON string
passkey_generate_register_options_get200_response_user_instance = PasskeyGenerateRegisterOptionsGet200ResponseUser.from_json(json)
# print the JSON string representation of the object
print(PasskeyGenerateRegisterOptionsGet200ResponseUser.to_json())

# convert the object into a dict
passkey_generate_register_options_get200_response_user_dict = passkey_generate_register_options_get200_response_user_instance.to_dict()
# create an instance of PasskeyGenerateRegisterOptionsGet200ResponseUser from a dict
passkey_generate_register_options_get200_response_user_from_dict = PasskeyGenerateRegisterOptionsGet200ResponseUser.from_dict(passkey_generate_register_options_get200_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


