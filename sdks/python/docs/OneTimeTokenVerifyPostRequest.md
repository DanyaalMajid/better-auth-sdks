# OneTimeTokenVerifyPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The token to verify. Eg: \&quot;some-token\&quot; | 

## Example

```python
from better_auth.models.one_time_token_verify_post_request import OneTimeTokenVerifyPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OneTimeTokenVerifyPostRequest from a JSON string
one_time_token_verify_post_request_instance = OneTimeTokenVerifyPostRequest.from_json(json)
# print the JSON string representation of the object
print(OneTimeTokenVerifyPostRequest.to_json())

# convert the object into a dict
one_time_token_verify_post_request_dict = one_time_token_verify_post_request_instance.to_dict()
# create an instance of OneTimeTokenVerifyPostRequest from a dict
one_time_token_verify_post_request_from_dict = OneTimeTokenVerifyPostRequest.from_dict(one_time_token_verify_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


