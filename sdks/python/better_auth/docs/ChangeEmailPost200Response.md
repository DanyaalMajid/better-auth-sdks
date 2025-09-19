# ChangeEmailPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the request was successful | 
**message** | **str** | Status message of the email change process | [optional] 

## Example

```python
from better_auth.models.change_email_post200_response import ChangeEmailPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeEmailPost200Response from a JSON string
change_email_post200_response_instance = ChangeEmailPost200Response.from_json(json)
# print the JSON string representation of the object
print(ChangeEmailPost200Response.to_json())

# convert the object into a dict
change_email_post200_response_dict = change_email_post200_response_instance.to_dict()
# create an instance of ChangeEmailPost200Response from a dict
change_email_post200_response_from_dict = ChangeEmailPost200Response.from_dict(change_email_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


