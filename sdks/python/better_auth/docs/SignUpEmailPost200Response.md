# SignUpEmailPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Authentication token for the session | [optional] 
**user** | [**SignUpEmailPost200ResponseUser**](SignUpEmailPost200ResponseUser.md) |  | 

## Example

```python
from better_auth.models.sign_up_email_post200_response import SignUpEmailPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SignUpEmailPost200Response from a JSON string
sign_up_email_post200_response_instance = SignUpEmailPost200Response.from_json(json)
# print the JSON string representation of the object
print(SignUpEmailPost200Response.to_json())

# convert the object into a dict
sign_up_email_post200_response_dict = sign_up_email_post200_response_instance.to_dict()
# create an instance of SignUpEmailPost200Response from a dict
sign_up_email_post200_response_from_dict = SignUpEmailPost200Response.from_dict(sign_up_email_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


